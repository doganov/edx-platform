// Backbone.js Application Model: CertificateWhitelist
/*global define, RequireJS */

;(function(define){
    'use strict';

    define([
            'underscore',
            'underscore.string',
            'backbone',
            'gettext'
        ],

        function(_, str, Backbone, gettext){

            return Backbone.Model.extend({
                idAttribute: 'id',

                defaults: {
                    user_id: '',
                    user_name: '',
                    user_email: '',
                    created: '',
                    notes: ''
                },

                urlRoot: function(){
                    return this.get('urlRoot');
                },

                url: function() {
                    var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url');
                    var id = this.get(this.idAttribute) || '';
                    return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
                },

                validate: function(attrs){
                    if (!_.str.trim(attrs.user_name) && !_.str.trim(attrs.user_email)) {
                        return gettext('Student username/email is required.');
                    }

                }
            });
        }
    );
}).call(this, define || RequireJS.define);