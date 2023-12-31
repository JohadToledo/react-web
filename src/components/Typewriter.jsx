import { TypeAnimation } from 'react-type-animation';

export default function Typewriter() {
  return (
    <TypeAnimation 
        className='inline-block text-base sm:text-3xl text-petroleo bg-transparent'
      sequence={[
        'I build things for the web',
        1500,
        'I create aesthetic and modern apps',
        1500,
        'I am a pragmatic Frontend Developer',
        1500,
        
      ]}
      wrapper="p"
      speed={50}
      repeat={Infinity}
    />
  )
}
