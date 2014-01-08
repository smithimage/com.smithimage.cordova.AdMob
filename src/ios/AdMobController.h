//
//  AdMobController.h
//
//  Created by Robert Wallstrom on 11/28/11.
//  Copyright (c) 2011 Smithimage. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "GADBannerViewDelegate.h"
#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>
#import <Cordova/CDVPluginResult.h>
@class GADRequest;

@interface AdMobController : CDVPlugin
<GADBannerViewDelegate> {
    GADBannerView *adBanner_;
}

@property(nonatomic, retain) GADBannerView *adBanner;
@property (nonatomic, copy) NSString *siteId;

- (GADRequest *)createRequest;

- (void) createBanner:(CDVInvokedUrlCommand*) command;
- (void) loadBanner:(CDVInvokedUrlCommand*) command;
- (void) moveBanner:(CDVInvokedUrlCommand*) command;
- (void) deleteBanner:(CDVInvokedUrlCommand*) command;
- (CGRect) createRectangle: (NSMutableDictionary*) options;
- (void) setLocation:(GADRequest**) request withDict: (NSMutableDictionary*) options;


@end
