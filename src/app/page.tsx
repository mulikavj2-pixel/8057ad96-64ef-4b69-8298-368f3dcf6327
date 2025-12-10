"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TeamCardSeven from '@/components/sections/team/TeamCardSeven';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Coffee, Star, HelpCircle, Mail, Instagram, Facebook, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="aurora"
      cardStyle="elevated-accent"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="minimal"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Brew Haven"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="BREW HAVEN"
          description="Discover the perfect cup of coffee crafted with passion and precision. Welcome to our cozy corner where every sip tells a story."
          buttons={[
            { text: "Explore Menu", href: "products" },
            { text: "Reserve Table", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379810133-mdokkjmg.jpg",
              imageAlt: "Freshly brewed coffee cup"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379811994-kvoorxj9.jpg",
              imageAlt: "Specialty latte with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379813282-2bw590j7.jpg",
              imageAlt: "Cozy coffee shop interior"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Where Coffee Passion Meets Community"
          description={[
            "At Brew Haven, we believe that coffee is more than just a beverage - it's an experience. Since opening our doors, we've been committed to sourcing the finest beans from sustainable farms around the world. Our expert baristas craft each cup with meticulous attention to detail, ensuring every visit delivers the perfect taste.",
            "We're not just a coffee shop; we're a gathering place where friends meet, ideas flourish, and moments matter. From our carefully curated pastry selection to our welcoming atmosphere, everything is designed with you in mind."
          ]}
          metrics={[
            { label: "Years of Excellence", value: "8+" },
            { label: "Happy Customers", value: "15K+" }
          ]}
          useInvertedBackground="noInvert"
          showBorder={false}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardFive
          title="Featured Menu Items"
          description="Explore our signature drinks crafted with premium beans and premium ingredients"
          tag="Best Sellers"
          tagIcon={Coffee}
          products={[
            {
              id: "espresso",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379816986-arhqnpki.jpg",
              imageAlt: "Double Espresso Shot",
              button: {
                text: "Order Espresso",
                id: "order-espresso"
              }
            },
            {
              id: "cappuccino",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379818272-125y0nv5.jpg",
              imageAlt: "Cappuccino with Latte Art",
              button: {
                text: "Order Cappuccino",
                id: "order-cappuccino"
              }
            },
            {
              id: "cold-brew",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379819798-il1xqiwa.jpg",
              imageAlt: "Iced Cold Brew",
              button: {
                text: "Order Cold Brew",
                id: "order-cold-brew"
              }
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Join thousands of coffee lovers who visit us regularly"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Regular Customer",
              testimonial: "The best coffee I've had in years. The baristas really know their craft, and the atmosphere is incredibly welcoming. I visit at least three times a week!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379821131-8okfmy6w.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Local Business Owner",
              testimonial: "Brew Haven has become my office away from home. Great coffee, reliable wifi, and the team always remembers my order. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379823471-u2q9c9vi.jpg",
              imageAlt: "James Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Coffee Enthusiast",
              testimonial: "Their single-origin selections are outstanding. You can really taste the care in every bean. The knowledgeable staff helps you discover new favorites.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379825093-czpy0rjh.jpg",
              imageAlt: "Emma Rodriguez portrait"
            },
            {
              id: "4",
              name: "Michael Torres",
              role: "Neighborhood Resident",
              testimonial: "From the moment I walked in, I felt at home. The cozy seating, friendly service, and exceptional coffee make this my go-to spot every morning.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379826503-dtiummwa.jpg",
              imageAlt: "Michael Torres portrait"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardSeven
          title="Meet Our Passionate Team"
          team={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379827754-ylq6o68l.jpg",
              imageAlt: "Alex - Head Barista"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379829271-tfxfdqim.jpg",
              imageAlt: "Maria - Barista"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379830952-wohm9por.jpg",
              imageAlt: "David - Founder & Owner"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379832535-z2syml4x.jpg",
              imageAlt: "Sophie - Customer Service"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379827754-ylq6o68l.jpg",
              imageAlt: "Marcus - Barista"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about Brew Haven"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Monday to Friday from 6:00 AM to 8:00 PM, Saturday from 7:00 AM to 9:00 PM, and Sunday from 8:00 AM to 6:00 PM. We're closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer wifi?",
              content: "Yes! We offer free high-speed wifi for all our customers. It's perfect for working, studying, or simply browsing. No password needed."
            },
            {
              id: "3",
              title: "Can I order online or for delivery?",
              content: "Currently, we offer in-store pickup orders placed through our website or app. We're working on delivery options and will announce them soon!"
            },
            {
              id: "4",
              title: "Do you have dairy-free options?",
              content: "Absolutely! We offer almond milk, oat milk, soy milk, and coconut milk as alternatives. We can customize any drink to suit your dietary preferences."
            },
            {
              id: "5",
              title: "Can I reserve a table?",
              content: "We accept reservations for groups of 6 or more. Please call us at (555) 123-4567 or use our online booking system. Walk-ins are always welcome!"
            },
            {
              id: "6",
              title: "What coffee beans do you use?",
              content: "We source premium beans from sustainable farms worldwide. Our selection rotates monthly to bring you fresh, seasonal varieties. Ask our baristas about current selections!"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379834405-dp4iawqm.jpg"
          imageAlt="Coffee expert explaining brewing techniques"
          useInvertedBackground="noInvert"
          mediaPosition="left"
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated with Brew Haven"
          description="Subscribe to our newsletter for exclusive offers, new menu items, and coffee tips delivered straight to your inbox."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Brew Haven"
          copyrightText="© 2024 Brew Haven | 123 Coffee Street, Your City | (555) 123-4567"
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/brewhaven",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/brewhaven",
              ariaLabel: "Facebook"
            },
            {
              icon: MapPin,
              href: "https://maps.google.com",
              ariaLabel: "Location"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}