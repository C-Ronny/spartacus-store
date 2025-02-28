import { Injectable } from '@angular/core'; // Allows service to be injected anywhere in the app
import { createClient, SupabaseClient } from '@supabase/supabase-js'; // import supabase functions


@Injectable({
  providedIn: 'root' // make service globally available without needing to import
})
export class SupabaseService {

  private supabase: SupabaseClient; // declaring the supabase client

  constructor() {
    // initialize class attriubte to make it an instance of the entire class
    // Initialize Supabase with the project URL and API key
    this.supabase = createClient(
      'https://xurbdbdlfrzcuojfsotf.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1cmJkYmRsZnJ6Y3VvamZzb3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MDQ2NTMsImV4cCI6MjA1NjI4MDY1M30.HPyoWX1qkYwoSwcJvWMtSOdR2sV0ID5k8pcpMvgqG04'
    );
  }

  // fetch all products from the products table
  async getProducts(){
    let { data, error } = await this.supabase.from('products').select('*'); // fetch all products from database
    if (error){
      console.error('Error fetching products:', error);
    }

    return data; // return the fetched data
  }
  



}
