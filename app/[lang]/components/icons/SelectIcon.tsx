// This is used for dynamically rendering icons in list pages depending on json data
import CheckMark from './IconCheckMark'
import IconAddress from './IconAddress'
import IconDelivery from './IconDelivery'
import IconEmail from './IconEmail'
import IconMusic from './IconMusic'
import IconPhoto from './IconPhoto'
import IconShow from './IconShow'
import IconStars from './IconStars'
import IconTelephone from './IconTelephone'
import IconPlus from './IconPlus'
import IconCart from './IconCart'
import IconHome from './IconHome'
import IconWeb from './IconWeb'
import IconRightArrowCircle from './IconRightArrowCircle'
import IconLeftArrowCircle from './IconLeftArrowCircle'
// Socials:
import IconFacebook from './social-icons/IconFacebook'
import IconSoundcloud from './social-icons/IconSoundcloud'
import IconInstagram from './social-icons/IconInstagram'

interface ISelectIconProps {
  iconSelection: string
  iconClasses: string
}

export default function SelectIcon({
  iconSelection,
  iconClasses
}: ISelectIconProps) {
  let icon

  switch (iconSelection) {
    case 'check':
      icon = <CheckMark classes={iconClasses} />
      break
    case 'address':
      icon = <IconAddress classes={iconClasses} />
      break
    case 'delivery':
      icon = <IconDelivery classes={iconClasses} />
      break
    case 'email':
      icon = <IconEmail classes={iconClasses} />
      break
    case 'music':
      icon = <IconMusic classes={iconClasses} />
      break
    case 'photo':
      icon = <IconPhoto classes={iconClasses} />
      break
    case 'show':
      icon = <IconShow classes={iconClasses} />
      break
    case 'stars':
      icon = <IconStars classes={iconClasses} />
      break
    case 'telephone':
      icon = <IconTelephone classes={iconClasses} />
      break
    case 'home':
      icon = <IconHome classes={iconClasses} />
      break
    case 'plus':
      icon = <IconPlus classes={iconClasses} />
      break
    case 'cart':
      icon = <IconCart classes={iconClasses} />
      break
    case 'web':
      icon = <IconWeb classes={iconClasses} />
      break
    case 'facebook':
      icon = <IconFacebook classes={iconClasses} />
      break
    case 'instagram':
      icon = <IconInstagram classes={iconClasses} />
      break
    case 'rightArrowCircle':
      icon = <IconRightArrowCircle classes={iconClasses} />
      break
    case 'leftArrowCircle':
      icon = <IconLeftArrowCircle classes={iconClasses} />
      break
    case 'soundcloud':
      icon = <IconSoundcloud classes={iconClasses} />
      break
    default:
      icon = <p className='text-red-500'>Error: No Icon Found</p>
  }

  return <>{icon}</>
}
