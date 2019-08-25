import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer IKG3_3KuQ-Oq8NcB5yUlthzyIXKZkynNuEn7i5Lrqu_EmCs5EOHvRVT6_PXmkPhYK_TbppyIiymjBn-_6JHisRxVjGxiuwyOum0gp7IHtSHf-V9fIR4dRrN1ClJdXXYx'
  }
});