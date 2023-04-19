import { certificate } from "@/types/main"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaVideo } from "react-icons/fa"
import { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color';
import { BiLinkExternal } from "react-icons/bi"
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import { useInView } from 'react-intersection-observer';

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const CertificateCard = ({ name, img, issuer, link}: certificate) => {
    const { theme } = useTheme();
    const [bgColor, setBgColor] = useState("")

    useEffect(() => {
        new FastAverageColor().getColorAsync(img)
            .then(color => {
                const rgba = color.rgb.split(')')
                setBgColor(rgba[0] + ',0.07)')
            })
            .catch(e => {
                console.log(e);
            })
    }, [img])

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-2 bg-white dark:bg-grey-800 rounded-lg p-4">

            <div className="relative group rounded-lg  " style={{ backgroundColor: bgColor }}>
                <br/>
                <Image alt={name} width={1000} height={1000} className="  h-40  max-h-full object-contain  rounded-lg" src={img} />
                <br/>
                <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
                        {link.trim() &&
                            <Link href={link} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                <BiLinkExternal size={20} />
                            </Link>
                        }
                    </div>
            </div>

            <div className="my-2 flex flex-col gap-3">
                <h3 className="text-xl font-medium">{name}</h3>
                <p className="text-sm text-gray-400"> <span className="font-medium">Issued By:</span> {issuer}</p>
            </div>

        </motion.div>
    )
}

export default CertificateCard