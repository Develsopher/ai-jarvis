import { ToolItemProps } from "@/components/tool-item";
import {
  Bot,
  Code2Icon,
  FileVideoIcon,
  MessageCircleMoreIcon,
  Music2,
  Palette,
  Settings2,
} from "lucide-react";

export const TOOLS = [
  {
    title: "Let's Chat",
    icon: MessageCircleMoreIcon,
    url: "/chat",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    slug: "chat",
  },
  {
    title: "Write the code",
    icon: Code2Icon,
    url: "/code",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    slug: "code",
  },
  {
    title: "Draw images",
    icon: Palette,
    url: "/image",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    slug: "image",
  },
  {
    title: "Create videos",
    icon: FileVideoIcon,
    url: "/video",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    slug: "video",
  },
  {
    title: "Play some music",
    icon: Music2,
    url: "/music",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    slug: "music",
  },
];

export const NAVIGATIONS = [
  {
    title: "Hey, Jarvis!",
    icon: Bot,
    url: "/dashboard",
    slug: "dashboard",
    color: "text-white",
  },
  ...TOOLS,
  {
    title: "Settings",
    icon: Settings2,
    url: "/settings",
  },
];

export const MAX_FREE_COUNTS = 5;
export const DAY_IN_MS = 86_400_000;

export const PHOTO_AMOUNT_OPTIONS = [
  {
    value: "1",
    label: "1 Photo",
  },
  {
    value: "2",
    label: "2 Photos",
  },
  {
    value: "3",
    label: "3 Photos",
  },
  {
    value: "4",
    label: "4 Photos",
  },
  {
    value: "5",
    label: "5 Photos",
  },
];

export const PHOTO_RESOLUTION_OPTIONS = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];
