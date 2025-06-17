import type { ContentModel } from "@/types";
import { generalContent } from "@/models/generalContent";
import { seo } from "@/models/seo";
import { landingPage } from "@/models/landingPage";
import { simpleHero } from "@/models/simpleHero";
import { link } from "@/models/link";

export const models:ContentModel[] = [generalContent,seo,landingPage,simpleHero,link];
