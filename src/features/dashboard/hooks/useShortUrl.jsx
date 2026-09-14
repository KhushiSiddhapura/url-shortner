import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {createShortUrlApi} from '../api/createShortUrl';
import {getAllLinks} from '../api/getAllLinks';

import {setLinks, setLoading, setSubmitting} from '../state/urlSlice';

export const useSubmitUrl = () => {
  const dispatch = useDispatch ();

  const {handleSubmit, formState: {errors}, register, reset} = useForm ();

  const isSubmitting = useSelector (state => state.url.isSubmitting);

  const onShortUrlClick = async data => {
    try {
      dispatch (setSubmitting (true));

      const result = await createShortUrlApi (data);

      if (result) {
        reset ();
      }

      return result;
    } catch (error) {
      console.log ('error in submit hook -> ', error);
    } finally {
      dispatch (setSubmitting (false));
    }
  };

  return {
    handleSubmit,
    errors,
    register,
    onShortUrlClick,
    isSubmitting,
  };
};

export const useAllUrls = () => {
  const dispatch = useDispatch ();

  const links = useSelector (state => state.url.links);

  const isLoading = useSelector (state => state.url.isLoading);

  const getLinks = async () => {
    try {
      dispatch (setLoading (true));

      const res = await getAllLinks ();

      if (res) {
        dispatch (setLinks (res.urls || []));
      }
    } catch (error) {
      console.log ('error in get links hook -> ', error);
    } finally {
      dispatch (setLoading (false));
    }
  };

  useEffect (() => {
    getLinks ();
  }, []);

  return {
    links,
    getLinks,
    isLoading,
  };
};

export const openLink = surl => {
  const url = `https://url-shortner-6bre.onrender.com/${surl}`;

  window.open (url, '_blank');
};
