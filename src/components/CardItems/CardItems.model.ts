export interface ICardItem {
  duration: boolean
  has_summative_assessment: boolean
  id: number
  image: string
  internal_title: string
  intro: string
  title: string
  type: string
  url: string
}


export interface ICardItems {
  items: ICardItem[]
}
