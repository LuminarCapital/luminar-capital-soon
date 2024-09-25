import { FC, SVGProps } from 'react'

export interface IFinancingOptionCard {
  className?: string
  title: string
  description: string
  href?: string
  icon?: FC<SVGProps<SVGSVGElement>>
}

export interface IGoogleReview {
  author_name: string
  author_url: string
  language: string
  original_language: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
  translated: boolean
}

export interface ISlickArrow {
  className?: string
  onClick?: () => void
  style?: {
    [key: string]: string
  }
}

export interface IPost {
  id?: string
  title: string
  slug?: string
  excerpt?: string
  date?: string
  featuredImage: {
    node: {
      sourceUrl?: string
      mediaItemUrl?: string
    }
  }
  mediaItemUrl: string
  content?: string | TrustedHTML
}

export interface ICategory {
  name: string
  slug: string
  id: string
}

export interface IPageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: number
  endCursor: number
}

export interface ITab {
  title: string
  value: string | number
}

export interface IOption {
  value: string
  label: string
  isDisabled?: boolean
  isFocused?: boolean
  isSelected?: boolean
}

export interface IModalState {
  isOpen: boolean
  modal: 'partner' | 'financing' | null
  size: 'xl' | 'lg' | 'md'
}

export interface IModalPayload {
  modal: 'partner' | 'financing'
  size: 'xl' | 'lg' | 'md'
}

export interface IBenefit {
  title: string
  description: string
  banner: string
}

export interface IBoardChessOrderCard {
  title: string
  description: string
  image: string
  label?: string
}
