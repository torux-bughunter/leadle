"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Mockup, MockupFrame } from "@/components/ui/mockup"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title: React.ReactNode
    subtitle?: string
    eyebrow?: string
    ctaText?: string
    ctaLink?: string
    mockupImage?: {
        src: string
        alt: string
        width: number
        height: number
    }
    mockupNode?: React.ReactNode
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
    ({ className, title, subtitle, eyebrow, ctaText, ctaLink, mockupImage, mockupNode, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex flex-col items-center bg-background", className)}
                {...props}
            >
                {eyebrow && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.2, 0.85, 0.45, 1] }}
                        className="font-sans uppercase tracking-[0.2em] md:tracking-[0.51em] leading-[133%] text-center text-sm md:text-[19px] mb-8 text-foreground"
                    >
                        {eyebrow}
                    </motion.p>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.2, 0.85, 0.45, 1], delay: 0.1 }}
                    className="text-5xl md:text-[64px] leading-tight md:leading-[83px] text-center px-4 md:px-12 lg:px-[200px] text-foreground tracking-tight"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.2, 0.85, 0.45, 1], delay: 0.3 }}
                        className="text-xl md:text-[28px] text-center font-sans font-light px-4 md:px-12 lg:px-[250px] mt-6 md:mt-[25px] mb-8 md:mb-[48px] leading-relaxed text-muted"
                    >
                        {subtitle}
                    </motion.p>
                )}

                {ctaText && ctaLink && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.2, 0.85, 0.45, 1], delay: 0.5 }}
                        className="z-10 relative"
                    >
                        <Link href={ctaLink}>
                            <div
                                className="inline-flex items-center bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-soft hover:shadow-soft-hover font-sans w-[227px] h-[49px]"
                            >
                                <div className="flex items-center justify-between w-full pl-[22px] pr-[17px]">
                                    <span className="text-[19px] whitespace-nowrap font-medium">{ctaText}</span>
                                    <div className="flex items-center gap-[14px]">
                                        <div className="w-[36px] h-[15px] relative flex justify-end">
                                            <ArrowRight className="w-5 h-5 text-primary-foreground" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {(mockupImage || mockupNode) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.2, 0.85, 0.45, 1], delay: 0.7 }}
                        className="mt-12 md:mt-20 w-full relative px-4 md:px-0"
                    >
                        <div className="max-w-5xl mx-auto">
                            <MockupFrame>
                                <Mockup type="responsive" className="w-full">
                                    {mockupNode ? mockupNode : (
                                        mockupImage && (
                                            <Image
                                                src={mockupImage.src}
                                                alt={mockupImage.alt}
                                                width={mockupImage.width}
                                                height={mockupImage.height}
                                                className="w-full h-auto"
                                                priority
                                                unoptimized
                                            />
                                        )
                                    )}
                                </Mockup>
                            </MockupFrame>
                        </div>
                        <div
                            className="absolute bottom-0 left-0 right-0 w-full h-[150px] md:h-[303px]"
                            style={{
                                background: "linear-gradient(to top, var(--color-background) 0%, transparent 100%)",
                                zIndex: 10,
                            }}
                        />
                    </motion.div>
                )}
            </div>
        )
    }
)
Hero.displayName = "Hero"

export { Hero }
