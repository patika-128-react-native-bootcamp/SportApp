import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  infos: {
    marginVertical: spacing.tiny,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
