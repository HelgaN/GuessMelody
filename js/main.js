import renderScreen from './renderScreen';
import welcomElement from './welcom';
import {renderArtistScreen} from './welcom';
import {welcomData} from './data/data';

renderScreen(welcomElement(welcomData), renderArtistScreen);
