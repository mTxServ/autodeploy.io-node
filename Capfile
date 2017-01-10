set :deploy_config_path, "deploy/config/deploy.rb"
set :stage_config_path, "deploy/config/deploy/"

# Load DSL and set up stages
require 'capistrano/setup'

# Include default deployment tasks
require 'capistrano/deploy'
require 'capistrano/npm'


Dir.glob('deploy/tasks/*.cap').each { |r| import r }
