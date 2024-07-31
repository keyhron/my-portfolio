import { Analytics } from "@vercel/analytics/react";
import { UserProvider } from "@/contexts/useUserContext";
import { fontNokio, fontFoundation, fontUrbanist } from "@/fonts";
import "@/styles/globals.css";

export const metadata = {
  title: "Juan Barrios | Front End Web And Mobile Developer",
  description:
    "I am a front-end developer with over 4 years of experience. I have advanced experience in React with Next and Typescript, React Native and Flutter, and I am currently learning Angular. I have a wide range of experience in web and mobile app development, and I have worked on a variety of projects from small businesses to large international companies.",
  keywords:
    "Web Developer, Mobile Developer, UI/UX Design, HTML, CSS, JavaScript, React, Node.js, Android, iOS, Flutter, Python, Responsive Design, UX, UI, SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${fontNokio.variable} ${fontFoundation.variable} ${fontUrbanist.variable} font-nokio`}
    >
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
      <Analytics />
    </html>
  );
}
