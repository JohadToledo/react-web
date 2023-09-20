import { social } from "./Data";

export default function Social() {
  return (
    <>
        <div className='flex justify-center w-40 gap-x-4 my-4 hover:fill-teal-500 bg-transparent'>
      {social &&
        social.map(({ name, url, icon }) => (
          
          <a
            href={url}
            key={name}
            className="hover:fill-teal-500 bg-transparent"
            rel="noreferrer"
            target="_blank"
            aria-label={name}
          >
          <div className="stroke-teal-300  hover:stroke-teal-500 bg-transparent">
            <span dangerouslySetInnerHTML={{ __html: icon }}></span>
            </div>
          </a>
        ))}
    </div>
    </>
  )
}
