const platformLogos = [
  {
    name: "Google",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=59fe266f52b52a2f5caded270cca5b0f",
  },
  {
    name: "ChatGPT",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/chat-gpt.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847621&s=4736cf2d6c608b09fccc2c64c443f9e5",
  },
  {
    name: "Gemini",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/gemini.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847619&s=463ddee81964da94d8f59fae9f7b1ded",
  },
  {
    name: "TikTok",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=08b0dfde30f4100b663ca58de24c358c",
  },
  {
    name: "YouTube",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/youtube.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=2158714454d29911639dc9bb8c906e26",
  },
  {
    name: "Pinterest",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/pinterest.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=17c0517351d1efef45ac391801ed3db9",
  },
  {
    name: "GIPHY",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/giphy.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847619&s=78f10c1dacfadddf5ebd6d9a18a64091",
  },
  {
    name: "Reddit",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/reddit.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=80b6bca1e6630e7882d1a278c97351ff",
  },
  {
    name: "Amazon",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/amazon.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847619&s=2227b641cefbadd9fc0c874a2eae3079",
  },
];

export function PlatformLogoStrip() {
  return (
    <div className="r7-platform-strip" aria-label="Searchable platforms">
      {platformLogos.map((logo) => (
        <div key={logo.name} className="r7-platform-logo-item">
          <img src={logo.src} alt={`${logo.name} logo`} className="r7-platform-logo-img" />
        </div>
      ))}
    </div>
  );
}