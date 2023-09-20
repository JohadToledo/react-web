import { social } from "./Data";

export default function Social() {
  return (
    <>
        <div className='flex justify-center w-40 gap-x-5 my-4 bg-transparent'>
      {social &&
        social.map(({ name, url, icon }) => (
          
          <a
            href={url}
            key={name}
            className=""
            rel="noreferrer"
            target="_blank"
            aria-label={name}
          >
          <div className="hover:stroke-darkpetro  stroke-aqua">
            <span dangerouslySetInnerHTML={{ __html: icon }}></span>
            </div>
          </a>
        ))}
    </div>
    </>
  )
}
