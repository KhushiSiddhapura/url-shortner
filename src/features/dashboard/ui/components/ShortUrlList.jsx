import {Link, MousePointerClick, ExternalLink} from 'lucide-react';
import {openLink} from '../../hooks/useShortUrl';

const ShortUrlList = ({links, getLinks}) => {
  if (!links || links.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
            <Link size={22} className="text-slate-400" />
          </div>

          <p className="text-sm font-medium text-slate-600">
            No shortened URLs yet
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Create your first short URL above.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto pr-2">
      <div className="space-y-3">
        {[...links].reverse ().map (item => (
          <div
            key={item._id || item.id}
            className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:shadow-sm sm:flex-row sm:items-center"
          >
            {/* Link Details */}
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-center gap-2">
                <Link size={17} className="shrink-0 text-indigo-600" />

                <p className="truncate text-sm font-semibold text-indigo-600">
                  {item.shortUrl}
                </p>
              </div>

              <p className="truncate text-sm text-slate-400">
                {item.originalUrl || item.url}
              </p>
            </div>

            {/* Click Count */}
            <div className="flex shrink-0 items-center gap-2">
              <div className="rounded-lg bg-slate-100 p-2 text-slate-500">
                <MousePointerClick size={17} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">
                  {item.count}
                </p>

                <p className="text-xs text-slate-400">
                  clicks
                </p>
              </div>
            </div>

            {/* Open Link */}
            <button
              type="button"
              onClick={() => {
                openLink (item.shortUrl);
                setTimeout (() => {
                  getLinks ();
                }, 100);
              }}
              className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-slate-200 p-2.5 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <ExternalLink size={17} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortUrlList;
