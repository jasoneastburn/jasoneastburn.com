import { Injectable } from '@angular/core';
import {
  ContentfulClientApi,
  Entry,
  EntryCollection,
  createClient,
} from 'contentful';

import { environment } from '../../environments/environment';
import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private clientApi: ContentfulClientApi;

  constructor() {
    this.clientApi = createClient({
      space: environment.contentful.space,
      accessToken: environment.contentful.accessToken,
    });
  }

  getBlogPost(slug: string): Promise<Entry<BlogPost>> {
    return this.getBlogPosts({
      'fields.slug': slug,
    }).then((response) => response.items[0]);
  }

  getBlogPosts(query?: object): Promise<EntryCollection<BlogPost>> {
    return this.clientApi.getEntries<BlogPost>(
      Object.assign({}, query, { content_type: 'blogPost' })
    );
  }
}
