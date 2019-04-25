/**
 * @file Defines the interface of a returned product request.
 * @author Valer Varga
 */

import { Product } from '../models/Product';

export interface ProductData {
  success: boolean,
  data: Product[]
};
