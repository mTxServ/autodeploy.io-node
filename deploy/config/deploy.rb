# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'autodeploy-io-node'
set :repo_url, 'git@github.com:sdieunidou/autodeploy.io-node.git'
set :keep_releases, 5

# Default value for :scm is :git
set :scm, 'git'

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :pty is false
# set :pty, true

after 'deploy:updated', 'npm:install'
