import SwiperCore, {
	Autoplay, Pagination, Navigation
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperSlider = () => {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={6}
			centeredSlides={true}
			autoplay={{
				"delay": 2500,
				"disableOnInteraction": false
			}}
			className="mySwiper"
		>
			<SwiperSlide>
				<img src="/techs/AWS.svg" alt="" className='h-[120px] col-2' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/language1.svg" alt="" className='h-[120px] col-2' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/language2.svg" alt="" className='h-[120px] col-2' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/language3.svg" alt="" className='h-[120px] col-2' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/language4.svg" alt="" className='h-[120px] col-2' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/language5.svg" alt="" className='h-[120px] col-2' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/language6.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/language7.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/language8.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/ROR.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/flutter.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/Android.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/tailwind.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/python.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/vue-js.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/css.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/Django.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/react-native.svg" alt="" className='h-[120px] mx-14' />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/techs/language9.svg" alt="" className='h-[120px]' />
			</SwiperSlide>
		</Swiper>
	)
}

export default SwiperSlider;