/** Home + Icons playground usage preview snippets — for Quartermaster John. */
export type IconSnippet = {
  id: string;
  title: string;
  description: string;
  code: string;
};

export const HOME_ICONS_SNIPPETS: IconSnippet[] = [
  {
    id: "material",
    title: "Material Icons",
    description: "Ligature font via material-icons CSS. Color inherits currentColor.",
    code: `import "ab-nextjs-icons/material-icons/index.css";

<span className="material-icons-outlined">home</span>
<span className="material-icons">home</span>`,
  },
  {
    id: "ant-design",
    title: "Ant Design Icons",
    description:
      "Prefer CSS mask + currentColor for dark-mode white. Public SVGs use #000 for mask luminance.",
    code: `import "ab-nextjs-icons/ant-design-icons/index.css";

<span className="anticon anticon-home" />
<span className="anticon anticon-filled anticon-home" />

// public mount (mask source)
// /ant-design-icons/outlined/home.svg
// /ant-design-icons/filled/home.svg`,
  },
  {
    id: "ab-icons",
    title: "AbIcons",
    description: "Material snake_case set. CSS mask + currentColor (dark-mode safe).",
    code: `import "ab-nextjs-icons/ab-icons/index.css";

<span className="abicon abicon-home" />
<span className="abicon abicon-filled abicon-home" />

// public mount
// /ab-icons/outlined/home.svg
// /ab-icons/filled/home.svg`,
  },
  {
    id: "logos",
    title: "Logos",
    description: "Default fill #a67c52. Use Dark/Light variants per logo.",
    code: `import {
  AbLogo,
  AbLogoDark,
  AbLogoLight,
  GithubLogo,
  GithubLogoDark,
  GithubLogoLight,
} from "ab-nextjs-icons/logos";

<img src="/ab-nextjs-icons/logos/ab-logo.svg" alt="Ab" />
<img src="/ab-nextjs-icons/logos/ab-logo-dark.svg" alt="Ab dark" />
<img src="/ab-nextjs-icons/logos/github-logo-light.svg" alt="GitHub" />`,
  },
  {
    id: "pics",
    title: "Pics",
    description: "JPEG MePics from package pics/.",
    code: `import { MePic, MePicNobg } from "ab-nextjs-icons/pics";

<img src="/ab-nextjs-icons/pics/me.jpg" alt="MePic" />
<img src="/ab-nextjs-icons/pics/me-nobg.jpg" alt="MePicNobg" />`,
  },
  {
    id: "launchers",
    title: "Launchers",
    description: "Launcher SVG assets.",
    code: `import { AbContainedLauncher } from "ab-nextjs-icons/launchers";

<img src="/ab-nextjs-icons/launchers/ab-contained-launcher.svg" alt="Launcher" />`,
  },
];

export const HOME_ICONS_PREVIEW = {
  brandFill: "#a67c52",
  antPublic: {
    outlined: "/ant-design-icons/outlined/{name}.svg",
    filled: "/ant-design-icons/filled/{name}.svg",
  },
  abPublic: {
    outlined: "/ab-icons/outlined/{name}.svg",
    filled: "/ab-icons/filled/{name}.svg",
  },
  snippets: HOME_ICONS_SNIPPETS,
} as const;
