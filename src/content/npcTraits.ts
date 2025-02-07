import { ageTraits } from './npc-traits/ageTraits';
import {
  buildTraits,
  heightTraits,
} from './npc-traits/anatomyTraits';
import {
  eyeColorTraits,
  eyeShapeTraits,
} from './npc-traits/eyeTraits';
import { featureTraits } from './npc-traits/featureTraits';
import { genderTraits } from './npc-traits/genderTraits';
import {
  hairColorTraits,
  hairStyleTraits,
} from './npc-traits/hairTraits';
import { mannerismTraits } from './npc-traits/mannerismTraits';
import { motivationTraits } from './npc-traits/motivationTraits';
import { plotHookTraits } from './npc-traits/plotHookTraits';
import {
  skinColorTraits,
  skinTextureTraits,
} from './npc-traits/skinTraits';
import {
  voicePitchTraits,
  voiceQualityTraits,
  voiceSpeedTraits,
  voiceVolumeTraits,
} from './npc-traits/voiceTraits';

const npcTraits = {
  gender: genderTraits,
  age: ageTraits,
  anatomy: {
    build: buildTraits,
    height: heightTraits,
  },
  skin: {
    color: skinColorTraits,
    texture: skinTextureTraits,
  },
  hair: {
    color: hairColorTraits,
    style: hairStyleTraits,
  },
  eyes: {
    color: eyeColorTraits,
    shape: eyeShapeTraits,
  },
  voice: {
    pitch: voicePitchTraits,
    quality: voiceQualityTraits,
    speed: voiceSpeedTraits,
    volume: voiceVolumeTraits,
  },
  features: featureTraits,
  mannerisms: mannerismTraits,
  motivation: motivationTraits,
  plotHooks: plotHookTraits,
};

export default npcTraits;
