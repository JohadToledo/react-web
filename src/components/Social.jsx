import { social } from "./Data";

export default function Social() {
  return (
    <>
        <div className='flex justify-center w-40 gap-x-4 my-4 hover:fill-teal-500'>
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
          <div className="stroke-lorange  hover:stroke-teal-500 ">
            <span dangerouslySetInnerHTML={{ __html: icon }}></span>
            </div>
          </a>
        ))}
    </div>
    </>
  )
}
