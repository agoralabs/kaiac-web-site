import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/intro', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'intro',
        loadChildren: () => import('./intro/intro.module').then(m => m.IntroModule)
      },
      {
        path: 'install',
        loadChildren: () => import('./install/install.module').then(m => m.InstallModule)
      },
      {
        path: 'documentation',
        loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule)
      },
      {
        path: 'roadmap',
        loadChildren: () => import('./roadmap/roadmap.module').then(m => m.RoadmapModule)
      },
      {
        path: 'solutions/alfresco',
        loadChildren: () => import('./solutions/alfresco/alfresco.module').then(m => m.AlfrescoModule)
      },
      {
        path: 'solutions/moodle',
        loadChildren: () => import('./solutions/moodle/moodle.module').then(m => m.MoodleModule)
      },
      {
        path: 'kvbooks/vpc',
        loadChildren: () => import('./kvbooks/vpc/vpc.module').then(m => m.VpcModule)
      },
      {
        path: 'kvbooks/alb',
        loadChildren: () => import('./kvbooks/alb/alb.module').then(m => m.AlbModule)
      },
      {
        path: 'kvbooks/vmonly',
        loadChildren: () => import('./kvbooks/vmonly/vmonly.module').then(m => m.VmonlyModule)
      },
      {
        path: 'kvbooks/tggroup',
        loadChildren: () => import('./kvbooks/tggroup/tggroup.module').then(m => m.TgGroupModule)
      },
      {
        path: 'kvbooks/packer',
        loadChildren: () => import('./kvbooks/packer/packer.module').then(m => m.PackerModule)
      },
      {
        path: 'kvbooks/vmgroup',
        loadChildren: () => import('./kvbooks/vmgroup/vmgroup.module').then(m => m.VmGroupModule)
      },
      {
        path: 'kvbooks/vmgrouppublic',
        loadChildren: () => import('./kvbooks/vmgrouppublic/vmgrouppublic.module').then(m => m.VmGroupPublicModule)
      },
      {
        path: 'kvbooks/cicd',
        loadChildren: () => import('./kvbooks/cicd/cicd.module').then(m => m.CiCdModule)
      },
      {
        path: 'kvbooks/dbrds',
        loadChildren: () => import('./kvbooks/dbrds/dbrds.module').then(m => m.DbRdsModule)
      },
      {
        path: 'kvbooks/dbonly',
        loadChildren: () => import('./kvbooks/dbonly/dbonly.module').then(m => m.DbOnlyModule)
      },
      {
        path: 'kvbooks/vm',
        loadChildren: () => import('./kvbooks/vm/vm.module').then(m => m.VmModule)
      },
      {
        path: 'kvbooks/asgroup',
        loadChildren: () => import('./kvbooks/asgroup/asgroup.module').then(m => m.AsGroupModule)
      },
      {
        path: 'kvbooks/s3website',
        loadChildren: () => import('./kvbooks/s3website/s3website.module').then(m => m.S3WebsiteModule)
      },
      {
        path: 'kvbooks/dbloader',
        loadChildren: () => import('./kvbooks/dbloader/dbloader.module').then(m => m.DbLoaderModule)
      },
      {
        path: 'kvbooks/dbdumper',
        loadChildren: () => import('./kvbooks/dbdumper/dbdumper.module').then(m => m.DbDumperModule)
      },
      {
        path: 'kvbooks/ecrcopy',
        loadChildren: () => import('./kvbooks/ecrcopy/ecrcopy.module').then(m => m.EcrCopyModule)
      },
      {
        path: 'kvbooks/lambda',
        loadChildren: () => import('./kvbooks/lambda/lambda.module').then(m => m.LambdaModule)
      },
      {
        path: 'kvbooks/operations',
        loadChildren: () => import('./kvbooks/operations/operations.module').then(m => m.OperationsModule)
      },
      {
        path: 'kvbooks/s3bucket',
        loadChildren: () => import('./kvbooks/s3bucket/s3bucket.module').then(m => m.S3BucketModule)
      },
      {
        path: 'kvbooks/swapper',
        loadChildren: () => import('./kvbooks/swapper/swapper.module').then(m => m.SwapperModule)
      },
      {
        path: 'kvbooks/templater',
        loadChildren: () => import('./kvbooks/templater/templater.module').then(m => m.TemplaterModule)
      },
      {
        path: 'kvbooks/vpcendpoint',
        loadChildren: () => import('./kvbooks/vpcendpoint/vpcendpoint.module').then(m => m.VpcEndpointModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
