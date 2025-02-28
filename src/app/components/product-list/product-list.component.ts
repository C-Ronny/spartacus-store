import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor (private supabaseService: SupabaseService){}
  async ngOnInit() {
    const products = await this.supabaseService.getProducts();
    if (products) {
      this.products = products;
    }
  }
}