# More info at https://github.com/guard/guard#readme

# Using compass instead of guard-sass
#guard :sass, :output => 'stylesheets/_compiled' do
  #watch(%r{^stylesheets/_sass/.+\.scss})
#end

guard :compass, :output => 'stylesheets/application' do
  watch(%r{^stylesheets/_sass/.+\.s[ac]ss})
end

#guard :coffeescript, :output => 'javascripts/_compiled' do
  #watch(%r{^javascripts/_coffee/.+\.coffee$})
#end

# Use this for development
#guard :concat, type: 'js', files: %w(_application), input_dir: 'javascripts/_compiled', output: 'javascripts/application'
# Switch to this for production
#guard :concat, type: 'js', files: %w(_application), input_dir: 'javascripts/_compiled', output: 'javascripts/_compiled/application.js'

# guard-process is not working on windows atm
#guard :process, :name => 'Uglify', :command => "uglifyjs javascripts/_compiled/application.js -o javascripts/application.min.js -c dead_code=true,drop_debugger=true,unused=true,join_vars=true -m -r '$,require,exports'" do
  #watch %r{javascripts/_compiled/application.js}
#end

# Using livereload instead of guard-livereload
#guard :livereload, :grace_period => 0.5 do
  #watch(%r{^_site/.+\.(css|js|html)})
#end
