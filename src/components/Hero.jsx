import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const handleSetVideoSrc = () => {
        if (window.innerWidth < 760) {
            setVideoSrc = smallHeroVideo
        } else {
            videoSrc = heroVideo
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleSetVideoSrc)

        return () => {
            window.removeEventListener('resize', handleSetVideoSrc)
        }

    }, [])

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 1.5
        })
    }, [])
    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id='hero' className='hero-title'>iPhone 15 Pro</p>

                <div className='md:w-10/12 w-9/12'>
                    <video className='pointer-event-none' autoPlay muted playsInline={true} key={videoSrc} >
                        <source src={videoSrc} type='video/mp4' />

                    </video>
                </div>
            </div>
        </section>
    )
}

export default Hero