import antman from '../assets/img/antman.png';
import aquaman from '../assets/img/aquaman.png';
import batman from '../assets/img/batman.png';
import blackwidow from '../assets/img/blackwidow.png';
import captainamerica from '../assets/img/captainamerica.png';
import captainmarvel from '../assets/img/captainmarvel.png';
import flash from '../assets/img/flash.png';
import greenlantern from '../assets/img/greenlantern.png';
import ironman from '../assets/img/ironman.png';
import spiderman from '../assets/img/spiderman.png';
import superman from '../assets/img/superman.png';
import thor from '../assets/img/thor.png';
import wonderwoman from '../assets/img/wonderwoman.png';

export function getImage(value) {
  const images = {
    antman,
    aquaman,
    batman,
    blackwidow,
    captainamerica,
    captainmarvel,
    flash,
    greenlantern,
    ironman,
    spiderman,
    superman,
    thor,
    wonderwoman,
  };

  return images[value];
}
