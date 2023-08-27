import { social } from "./Data";

export default function Social() {
  return (
    <>
        <div className='flex w-1/3 gap-x-4 my-3 hover:fill-teal-500'>
      {social &&
        social.map(({ name, url, icon }) => (
          
          <a
            href={url}
            key={name}
            className="hover:fill-teal-500"
            rel="noreferrer"
            target="_blank"
            aria-label={name}
          >
          <div className="stroke-teal-300  hover:stroke-teal-500 ">
            <span dangerouslySetInnerHTML={{ __html: icon }}></span>
            </div>
          </a>
        ))}
    </div>
    </>
  )
}
