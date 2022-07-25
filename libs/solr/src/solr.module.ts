import { Module } from '@nestjs/common';
import { SolrService } from './solr.service';

@Module({
  providers: [SolrService],
  exports: [SolrService],
})
export class SolrModule {}
