export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'phone' | 'email' | 'github' | 'youtube';
  url: string;
  icon: string;
  label: string;
}

export type CommitteeCategory = 'karta' | 'tech' | 'leadership' | 'advisor' | 'organizer' | 'seva' | 'youth';

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  category: CommitteeCategory;
  badge?: string;
  image?: string;
  bio?: string;
  phone?: string;
  email?: string;
  socials?: SocialLink[];
  order?: number;
}

