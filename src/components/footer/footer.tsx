'use client'
import Image from "next/image";
import Lottie from "lottie-react";
import { FooterImage } from "@/assets/images";
import { Button, ButtonWithLink, Input } from "@/components/ui";
import Link from "next/link";
import { IdeaIcon } from "@/assets/icons";
import { companyList, legalList, socialMediaList } from "./footer.strings";
import footerAnimation from '@/assets/animations/footer-animation.json'

export const Footer = (): JSX.Element => {
  return (
    <footer className="text-white">
      <section className="flex justify-between px-24">
        <article className="bg-brand p-16 rounded-4.5xl space-y-4 h-fit translate-y-[110%]">
          <h1>Let{"’"}s get started.</h1>
          <p>
            Can{"’"}t find what you{"’"}re looking for!
          </p>
          <ButtonWithLink
            className="!rounded-full !font-normal w-fit space-x-4 !px-9 !py-2"
            href="/request"
            variant="ghost"
          >
            <IdeaIcon /> <span>Request custom project</span>
          </ButtonWithLink>
        </article>

        <div className="relative flex-1 max-w-[530px]">
          {/* <Image
            alt="footer-image"
            className="translate-y-[50%]"
            src={FooterImage}
            width={530}
            height={500}
            layout="responsive"
          /> */}

          <Lottie animationData={footerAnimation} loop={true} className="translate-y-[50%]"/>
        </div>
      </section>

      <section className="bg-D px-24 rounded-t-9xl pt-48">
        <div className="flex justify-between pb-8">
          <div className="flex gap-20">
            <ul className="space-y-2">
              <li>Company</li>
              {companyList.map(({ value, link }) => (
                <li key={link}>
                  <Link className="text-secondary-text" href={link}>
                    {value}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2">
              <li>Legal</li>
              {legalList.map(({ value, link }) => (
                <li key={link}>
                  <Link className="text-secondary-text" href={link}>
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex items-end gap-4">
            {socialMediaList.map(({ value, link }) => (
              <li key={link}>
                <ButtonWithLink
                  className="!p-2 !text-black"
                  href={link}
                  variant="ghost"
                >
                  {value}
                </ButtonWithLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 items-center py-8 border-t border-b border-[#091DF662]">
          <div>
            <h3>Subscribe to Our Newsletter</h3>
            <p className="text-secondary-text">
              Stay up to date with all the recent news, updates and great
              discounts by simply adding your email address to our list. We
              promise we will never spam you.
            </p>
          </div>

          <form className="flex gap-4">
            <Input
              className="!rounded-full !border-none !px-5"
              placeholder="Your name"
            />
            <Button className="!rounded-full" type="submit">
              SUBSCRIBE
            </Button>
          </form>
        </div>

        <p className="py-3 text-end">Copyright © 2023 Animoox Studio.</p>
      </section>
    </footer>
  );
};
