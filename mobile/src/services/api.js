import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import axios from 'axios';

export default axios.create({
   baseURL: 'http://192.168.100.247:3333'
})