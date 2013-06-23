require 'pathname'


desc 'Generates the static site into the _site directory'
task :build do
  system 'bundle exec jekyll build'
  puts 'build complete'
end

# This is still a work in progress
desc "Deploy _site # Usage: rake deploy deployto=stage deployuser=username"
task :deploy do
  puts 'deploy not implemented'
  #if ENV['deployto'] == 'stage'
    #puts 'deploying to stage'
    #stage = '/path/to/stage'
    #deploy_dir = stage + '/deploy-dir'
    #user = ENV['deployuser']

    #unless Dir.exists?(stage)
      #FileUtils.mkdir_p File.dirname(stage)
    #end

    #pathname = Pathname.new(stage)
    #unless pathname.mountpoint?
      #system(%{mount_smbfs -f 775 -d 775 //#{user}@/stage/host #{stage}})
    #end

    #if Dir.exists?(deploy_dir)
      #FileUtils.cd deploy_dir
      #Dir.foreach deploy_dir do |filename|
        #for i in `ls | grep -v dont-delete`; do rm -rf $i; done
        #FileUtils.remove_entry_secure filename unless filename =~ /^\.|\.\.|dont-delete.*/
      #end
      #cp -R ~/developer/projects/project/_site/* ./
      #localsite = File.dirname(__FILE__) + '/_site/.'
      #FileUtils.cp_r localsite, deploy_dir
    #else
      #puts "Can't find deploy directory!"
      #exit 1
    #end
  #end
  #puts 'deploy complete'
end


desc "Usage: rake page name=\"about.html\"\nCreate a new page.\nYou can also specify a sub-directory path.\nIf you don't specify a file extention we create an index.html at the path specified"
task :page do
  name     = ENV["name"].gsub(/[\W\_]/, '-').downcase || "new-page.html"
  filename = File.join(File.dirname(__FILE__), "#{name}")
  title    = File.basename(filename, File.extname(filename)).gsub(/[\W\_]/, " ").gsub(/\b\w/){$&.upcase}
  filename = File.join(filename, "index.html") if File.extname(filename) == ""
  if File.exist?(filename)
    abort("rake aborted!") if prompt("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  mkdir_p File.dirname(filename)
  puts "Creating new page: #{filename}"
  open(filename, 'w') do |post|
    post.puts '---'
    post.puts 'layout: base'
    post.puts 'description: ""'
    post.puts 'meta-description: ""'
    post.puts 'meta-keywords: ""'
    post.puts "title: \"#{title}\""
    post.puts '---'
  end
end

desc "Deletes _site/* and touches javascripts, stylesheets and index.html which regenerates the site. Guard and Jekyll need to be watching."
task :touch do
  project = File.dirname(__FILE__)
  localsite = File.dirname(__FILE__) + '/_site'
  system(%{rm -rf #{localsite}*})
  system(%{cd #{project}/stylesheets/_sass && for i in `ls`; do touch $i; done})
  system(%{cd #{project}/javascripts/_coffee && for i in `ls`; do touch $i; done})
  system(%{cd #{project} && touch index.html})
end

namespace :watch do
  desc 'Watches for changes to any of the css/sass javascript/coffeescript and recompiles them as necessary'
  task :guard do
    system 'bundle exec guard'
  end

  desc 'Starts jekyll and serves the site on port specified in _config.yml file\nWatches for changes and regenerates the site into the _site directory'
  task :jekyll do
    system 'bundle exec jekyll serve --watch'
  end
end

# Below methods are called internally

# prompt("Do you feel happy today?", ['y', 'n'])
# => y or n
def prompt(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')} ") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end
