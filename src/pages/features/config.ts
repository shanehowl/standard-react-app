import AntDesignLogo from '../../assets/images/antd-logo.svg'
import ReduxLogo from '../../assets/images/redux-logo.svg'
import OktaLogo from '../../assets/images/okta-logo.svg'
import JestLogo from '../../assets/images/jest-logo.svg'
import UtilityLogo from '../../assets/images/utility-logo.svg'

import { FEATURE_DETAIL } from './modal'

export const FEATURE_LIST: FEATURE_DETAIL[] = [
  {
    headerTitle: 'UI Component',
    headerColor: '#0D6CFF',
    icon: AntDesignLogo,
    title: 'Ant Design',
    description: '',
  },
  {
    headerTitle: 'State Management',
    headerColor: '#764ABC',
    icon: ReduxLogo,
    title: 'Redux',
    description: '',
  },
  {
    headerTitle: 'Authentication',
    headerColor: '#007DC1',
    icon: OktaLogo,
    title: 'Okta',
    description: '',
  },
  {
    headerTitle: 'Unit Test',
    headerColor: '#C63D14',
    icon: JestLogo,
    title: 'Jest',
    description: '',
  },
  {
    headerTitle: 'Utilities: Git Hooks',
    headerColor: '#979797',
    icon: UtilityLogo,
    title: 'Husky',
    description: '',
  },
  {
    headerTitle: 'Utilities: File creation',
    headerColor: '#979797',
    icon: UtilityLogo,
    title: 'Plop',
    description: '',
  },
]
