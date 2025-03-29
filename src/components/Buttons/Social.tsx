import Link from "next/link";

export default function Social() {
  return (
    <>
      <Link
        href="https://www.instagram.com/eltitularmdp/"
        target="#"
        className="m-2 flex items-center"
      >
        <svg
          width="46"
          height="46"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="button"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
        </svg>
      </Link>
      <Link
        href="https://wa.me/5492234544870"
        target="#"
        className="m-2 flex items-center"
      >
        <svg
          width="46"
          height="46"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="button"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      </Link>
      <Link
        href="mailto:eltitularmdp@gmail.com"
        target="#"
        className="m-2 flex items-center"
      >
        <svg
          width="46"
          height="46"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="button"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </svg>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UC_y5jK1WRWZPcJTTDJEqmhA"
        target="#"
        className="m-2 flex items-center"
      >
        <svg
          width="46"
          height="46"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="button"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
          <path d="M10 9l5 3l-5 3z" />
        </svg>
      </Link>
      <Link
        href="https://www.facebook.com/people/El-Titular/61555169820286/"
        target="#"
        className="m-2 flex items-center"
      >
        <svg
          width="46"
          height="46"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="button"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
      </Link>
    </>
  );
}
