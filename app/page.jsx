import Image from "next/image"
import Link from "next/link"
import { CountdownTimer } from "@/components/countdown-timer"
import { EmailSignup } from "@/components/email-signup"
import { SocialLinks } from "@/components/social-links"
import { ProductPreview } from "@/components/product-preview"
import { HeroAnimation } from "@/components/hero-animation"

export default function Home() {
  // Launch date - set to 30 days from now
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-6 px-4 md:px-6 lg:px-8 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="https://i.imgur.com/8FyXSHx.png"
              alt="Wudrin Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-2xl font-semibold tracking-tight">Wudrin</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-amber-600 transition-colors duration-300">
              About
            </Link>
            <Link href="#preview" className="text-sm font-medium hover:text-amber-600 transition-colors duration-300">
              Preview
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-amber-600 transition-colors duration-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://i.imgur.com/JGkTu9S.jpg"
              alt="Wooden decor background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <HeroAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Crafted Beauty for Your Home</h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Exquisite wooden and metal decorative items, launching soon.
                </p>
                <p className="mb-2">Let's meet in the market.</p>

                <div className="mb-12">
                  <CountdownTimer targetDate={launchDate} />
                </div>

                <div className="max-w-md mx-auto">
                  <EmailSignup />
                </div>
              </div>
            </HeroAnimation>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">About Wudrin</h2>
                <p className="text-gray-600 mb-6">
                  At Wudrin, we believe that your home should reflect your unique style and personality. Our carefully
                  crafted wooden and metal decorative items are designed to add warmth, character, and elegance to any
                  space.
                </p>
                <p className="text-gray-600">
                  Each piece is thoughtfully created with attention to detail, combining traditional craftsmanship with
                  contemporary design. We source sustainable materials and work with skilled artisans to bring you
                  decorative items that are not just beautiful, but also ethically made.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://i.imgur.com/Ij1Ysrm.jpg"
                  alt="Wooden and metal crafts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section id="preview" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Product Preview</h2>
            <ProductPreview />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Stay Connected</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Follow us on social media for updates, behind-the-scenes content, and exclusive offers.
            </p>
            <SocialLinks />
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-6 border-t">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="https://i.imgur.com/8FyXSHx.png" alt="Wudrin Logo" width={24} height={24} />
            <span className="text-sm font-medium">© {new Date().getFullYear()} Wudrin. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

