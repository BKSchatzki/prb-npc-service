import { ageList } from './npc-traits/ageTraits';
import { buildList, heightList } from './npc-traits/anatomyTraits';
import { eyeColorList, eyeShapeList } from './npc-traits/eyeTraits';
import { featuresList } from './npc-traits/featureTraits';
import { hairColorList, hairStyleList } from './npc-traits/hairTraits';
import { mannerismsList } from './npc-traits/mannerismTraits';
import { motivationsList } from './npc-traits/motivationTraits';
import { plotHooksList } from './npc-traits/plotHookTraits';
import {
  voicePitchList,
  voiceQualityList,
  voiceSpeedList,
  voiceVolumeList,
} from './npc-traits/voiceTraits';

const npcTraits = {
  age: ageList,
  anatomy: {
    build: buildList,
    height: heightList,
  },
  hair: {
    color: hairColorList,
    style: hairStyleList,
  },
  eyes: {
    color: eyeColorList,
    shape: eyeShapeList,
  },
  voice: {
    pitch: voicePitchList,
    quality: voiceQualityList,
    speed: voiceSpeedList,
    volume: voiceVolumeList,
  },
  features: featuresList,
  mannerisms: mannerismsList,
  motivation: motivationsList,
  plotHooks: plotHooksList,
};

export default npcTraits;
