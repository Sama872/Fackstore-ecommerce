import Image from 'next/image';
import heroImage from '../../images/intro (1) (1).png';

export default function HeroSection() {
  return (
    <div className='container my-5 '>
     <div className="row justify-content-center align-items-center pt-5">
        <div className="col-md-6">
            <h2>E-Commerce</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, minima.</p>
        </div>
        <div className="col-md-6">
        <Image src={heroImage} alt="Hero" width={350} height={350} className="header-img" />
        </div>
     </div>
    </div>
  );
}