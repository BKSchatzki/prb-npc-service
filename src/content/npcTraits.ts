import { ageTraits } from './npc-traits/ageTraits.js';
import {
  buildTraits,
  heightTraits,
} from './npc-traits/anatomyTraits.js';
import {
  eyeColorTraits,
  eyeShapeTraits,
} from './npc-traits/eyeTraits.js';
import { featureTraits } from './npc-traits/featureTraits.js';
import { genderTraits } from './npc-traits/genderTraits.js';
import {
  hairColorTraits,
  hairStyleTraits,
} from './npc-traits/hairTraits.js';
import { mannerismTraits } from './npc-traits/mannerismTraits.js';
import { motivationTraits } from './npc-traits/motivationTraits.js';
import { plotHookTraits } from './npc-traits/plotHookTraits.js';
import {
  skinColorTraits,
  skinTextureTraits,
} from './npc-traits/skinTraits.js';
import {
  voicePitchTraits,
  voiceQualityTraits,
  voiceSpeedTraits,
  voiceVolumeTraits,
} from './npc-traits/voiceTraits.js';

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
