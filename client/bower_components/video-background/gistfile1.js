/*
 * vg-bkg-size
 * A Videogular plugin to emulate background-size CSS property for video: "cover" or "contain"
 * 
 * Use:
 * <videogular vg-bkg-size="cover" center="true"></videogular>
 * vg-bkg-size => "cover" or "contain"
 * center => true or false
 *
 * Copyright (c) 2014 Panurge Web Studio
 * Licensed under the MIT license.
 */
( function( angular, undefined ) {

    'use strict';

    angular.module( 'vg-bkg-size', [] ).directive( 'vgBkgSize', [ '$window',
        function( $window ) {

            return {
                restrict: 'A',
                require: '^videogular',

                link: function( $scope, elem, attrs, API ) {

                    var videoHeight, videoWidth, inited = false,
                        mode = attrs.vgBkgSize === 'contain' ? 'contain' : 'cover',
                        center = attrs.center === false ? false : true;

                    // API extension
                    API.vgBkgSize = API.vgBkgSize || {};

                    API.vgBkgSize.update = function() {
                        
                        if ( !inited ) {
                            return;
                        }
                        
                        var video = API.videoElement[ 0 ];
                        // get native video size
                        videoHeight = video.videoHeight;
                        videoWidth = video.videoWidth;

                        API.vgBkgSize.layout();

                    };

                    API.vgBkgSize.layout = function() {

                        if ( !inited ) {
                            return;
                        }

                        // get wrapper size
                        var containerH = elem[ 0 ].offsetHeight,
                            containerW = elem[ 0 ].offsetWidth;

                        var newW, newH;

                        var ratio = videoWidth / videoHeight;

                        if ( mode === 'contain' ) {
                            if ( containerH / containerW > videoHeight / videoWidth ) {
                                newW = containerW;
                                newH = containerW / ratio;

                            } else {
                                newW = containerH * ratio;
                                newH = containerH;

                            }
                        } else if ( mode === 'cover' ) {
                            if ( containerH / containerW > videoHeight / videoWidth ) {
                                ratio = videoWidth / videoHeight;
                                if ( containerH * ratio < containerW ) {
                                    newW = containerW;
                                    newH = containerW / ratio;

                                } else {
                                    newW = containerH * ratio;
                                    newH = containerH;

                                }
                            } else {
                                if ( containerW / ratio < containerH ) {
                                    newW = containerH * ratio;
                                    newH = containerH;

                                } else {
                                    newW = containerW;
                                    newH = containerW / ratio;

                                }
                            }
                        };

                        API.videoElement.css( {
                            'width': newW + 2,
                            'height': newH + 2, // +2 pixels to safely prevent empty spaces
                            'max-height': 'none',
                            'max-width': 'none'
                        } );

                        if ( center ) {
                            API.videoElement.css( {
                                'margin-top': ( containerH - ( newH + 2 ) ) / 2,
                                'margin-left': ( containerW - ( newW + 2 ) ) / 2
                            } );
                        } else {
                            API.videoElement.css( {
                                'margin-top': '',
                                'margin-left': ''
                            } );
                        }

                    }

                    attrs.$observe( 'vgBkgSize', function( nv, ov ) {
                        if ( nv !== ov ) {
                            mode = nv === 'contain' ? 'contain' : 'cover';
                            API.vgBkgSize.layout();
                        }
                    } );

                    attrs.$observe( 'center', function( nv, ov ) {
                        if ( nv !== ov ) {
                            center = $scope.$eval( nv ) === false ? false : true;
                            API.vgBkgSize.layout();
                        }
                    } );

                    $scope.$watch(
                        function() {
                            return API.isPlayerReady();
                        },
                        function( newVal, oldVal ) {
                            if ( newVal !== oldVal ) {
                                if ( newVal === true ) {
                                    inited = true;
                                    API.vgBkgSize.update();                      
                                }
                                else{
                                    inited = false;
                                }
                            }
                        }
                    );

                    $scope.$on("$vgBkgSizeUpdate", API.vgBkgSize.update);
                    $scope.$on("$vgBkgSizeLayout", API.vgBkgSize.layout);

                    angular.element( $window ).on( 'resize', API.vgBkgSize.layout );
                }
            };
        }
    ] );

} )( window.angular );
