/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Bathroom' | 'Plumbing' | 'Heating';
}

export const COMPANY_INFO = {
  name: "Priority Plumbing and Heating",
  tagline: "Priority plumbing & heating provides a wide range of services including high end tiling for that perfect looking bathroom.",
  phone: "+44 7546 599879",
  email: "priorityplumbingworks@outlook.com",
  location: "Chesterfield, United Kingdom",
  instagram: "priority_plumbingpage",
  tiktok: "priority.plumbing7",
};
