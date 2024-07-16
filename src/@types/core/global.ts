export type ConnectWithAudiencesTypes = 'connectWithAudiences' | 'engageWithAudiences'

interface ConnectWithAudiencesData {
  title: string,
  txtGetStarted: string,
  linkGetStarted: string,
  imageLeft: string,
  imageRight: string,
}

interface ReviewItemData {
  logoUrl: string,
  content: string,
}

interface ReviewData {
  title: string,
  reviews: Array<ReviewItemData>,
}

interface FaqItemData {
  question: string,
  answer: string,
}

interface FaqsData {
  title: string,
  faqs: Array<FaqItemData>,
}

export interface GlobalStats {
  connectWithAudiences: ConnectWithAudiencesData,
  engageWithAudiences: ConnectWithAudiencesData,
  review: ReviewData,
  faqs: FaqsData,
}

export interface OptionData {
  value: string,
  label: string,
}