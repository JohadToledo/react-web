import { TypeAnimation } from 'react-type-animation';

export default function Typewriter() {
  return (
    <TypeAnimation 
        className='inline-block text-base sm:text-3xl text-teal-600'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a pragmatic Frontend Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'I build things for the web',
        1500,
        'I create aesthetic and modern apps',
        1500,
        
      ]}
      wrapper="p"
      speed={50}
      repeat={Infinity}
    />
  )
}
