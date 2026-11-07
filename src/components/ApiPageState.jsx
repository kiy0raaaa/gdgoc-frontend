export default function ApiPageState({ isLoading, isError, isEmpty }) {
  if (isLoading) {
    return (
      <div
        role="status"
        aria-label="Memuat data"
        className="flex w-full items-center justify-center gap-3 px-6 py-3 font-googleSans text-sm text-[#5F6368]"
      >
        <span className="size-5 animate-spin rounded-full border-2 border-[#4285F4]/20 border-t-[#1967D2]" />
        <span>Memuat data...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex w-full flex-wrap items-center justify-center gap-3 px-6 py-3 text-center">
        <p role="alert" className="font-googleSans text-sm text-[#5F6368]">
          Gagal memuat data. Silakan coba lagi.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-lg bg-[#4285F4] px-4 py-2 font-googleSans text-sm font-medium text-white transition-colors hover:bg-[#3367D6]"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="flex w-full items-center justify-center px-6 py-3 text-center">
        <p role="status" className="font-googleSans text-sm text-[#5F6368]">
          Belum ada data.
        </p>
      </div>
    );
  }

  return null;
}
