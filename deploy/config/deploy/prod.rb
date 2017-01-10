set :stage, 'prod'
set :branch, 'master'
set :deploy_to, '/home/autodeploy/www'
set :tmp_dir, -> { "#{fetch(:deploy_to)}/tmp" }
set :log_level, 'debug'


server 'live1.autodeploy.io', user: 'autodeploy', port: 22, roles: %w{app db web}
