import {Link} from 'lucide-react';

import ShortUrlList from '../components/ShortUrlList';
import { useAllUrls, useSubmitUrl } from '../../hooks/useShortUrl';

const Dashboard = () => {
  const {links, getLinks, isLoading} = useAllUrls ();

  const {
    handleSubmit,
    register,
    onShortUrlClick,
    isSubmitting,
  } = useSubmitUrl ();

  const handleCreateUrl = async data => {
    const result = await onShortUrlClick (data);

    if (result) {
      await getLinks ();
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-slate-50">
      <div className="mx-auto flex h-full max-w-5xl flex-col px-5 py-8 sm:px-8">

        {/* Header */}
        <div className="mb-8 shrink-0">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Link size={22} />
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              URL Shortener
            </h1>
          </div>

          <p className="text-sm text-slate-500">
            Create short and shareable links.
          </p>
        </div>

        {/* URL Input */}
        <section className="mb-8 shrink-0 rounded-2xl bg-indigo-600 p-6 sm:p-7">
          <div className="mb-5">
            <h2 className="mb-1 text-lg font-bold text-white">
              Shorten a new URL
            </h2>

            <p className="text-sm text-indigo-200">
              Paste your long URL below.
            </p>
          </div>

          <form
            onSubmit={handleSubmit (handleCreateUrl)}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Link
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="https://example.com/your-long-url"
                {...register ('url', {
                  required: 'URL is required',
                })}
                className="h-14 w-full rounded-xl bg-white pl-12 pr-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-14 cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Shortening...' : 'Shorten URL'}

              <Link size={18} />
            </button>
          </form>
        </section>

        {/* Links List */}
        <div className="min-h-0 flex-1 overflow-hidden">
          {isLoading
            ? <div className="flex h-full items-center justify-center">
                <p className="text-sm text-slate-400">
                  Loading links...
                </p>
              </div>
            : <ShortUrlList links={links}
  getLinks={getLinks} />}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
