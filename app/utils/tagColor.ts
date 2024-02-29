export default function tagColor(tag: string){
    if(tag === 'Recommended'){
      return 'bg-primary border-primary text-secondary'
    }
    if(tag === 'Not Recommended'){
      return 'bg-red-600 border-red-600'
    }
    return 'bg-orange-600 border-orange-600'
  }